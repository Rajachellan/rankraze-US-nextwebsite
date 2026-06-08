"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import { cn } from "@/lib/utils";
import "leaflet/dist/leaflet.css";
import "./MapAndLocationMatch.css";

type OfficeLocation = {
    label: string;
    city: string;
    address: string;
    phone: string;
    email: string;
    lat: number;
    lng: number;
};

type CountryGroup = {
    country: string;
    imgUrl: string;
    offices: OfficeLocation[];
};

type FlatOffice = OfficeLocation & {
    country: string;
    countryIndex: number;
    officeIndex: number;
    imgUrl: string;
};

type ViewSelection = "all" | number;

const COUNTRY_BTN =
    "min-w-[4.75rem] md:min-w-[5.25rem] min-h-10 py-2 px-3.5 md:py-2.5 md:px-4 rounded-md border border-gray-200 dark:border-[rgba(184,255,242,0.2)] bg-white dark:bg-[#0d1f38] text-gray-700 dark:text-emerald-100 text-[13px] md:text-sm font-semibold leading-tight cursor-pointer whitespace-nowrap transition-[border-color,background-color,color,box-shadow] duration-200 hover:border-[var(--primary-green)] hover:text-teal-800 dark:hover:text-[#6bffe4]";

const COUNTRY_BTN_ACTIVE =
    "border-[var(--primary-green)] bg-gradient-to-br from-[#3cba9918] to-[#37a7ff12] dark:from-[#3cba9930] dark:to-[#37a7ff18] text-teal-800 dark:text-[#6bffe4] shadow-[0_0_0_1px_rgba(60,186,153,0.25)] dark:shadow-[0_0_0_1px_rgba(107,255,228,0.2)]";

const COUNTRY_NAV_ARROW =
    "grid place-items-center w-8 h-8 rounded-md border border-gray-300 dark:border-[rgba(184,255,242,0.2)] bg-gray-50 dark:bg-[#0d1f38] text-gray-700 dark:text-[#b8fff2] cursor-pointer transition-[border-color,background-color,color] duration-200 z-[3] shrink-0 hover:border-[var(--primary-green)] hover:bg-[#3cba9914] hover:text-teal-800 dark:hover:bg-[#3cba9920] dark:hover:text-[#6bffe4] disabled:opacity-35 disabled:cursor-not-allowed";

const countryGroups: CountryGroup[] = [
    {
        country: "India",
        imgUrl: "/upload/india-skt.webp",
        offices: [
            {
                label: "Head Office",
                city: "Chennai",
                address: "2nd Floor, Karuna Conclave, AD 42 & 45, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040",
                phone: "+91 99622 62210 - 04448067255",
                email: "info@rankraze.com",
                lat: 13.0826885,
                lng: 80.208938,
            },
            {
                label: "Registered Office",
                city: "Chennai",
                address: "Plot No. 264, Door No. F/22, F Block, 2nd Main Road, Anna Nagar East, Chennai, Tamil Nadu 600102",
                phone: "+91 99622 62210 - 04448067255",
                email: "info@rankraze.com",
                lat: 13.08535,
                lng: 80.22401,
            },
            {
                label: "Korattur Office",
                city: "Chennai",
                address: "#249, 1st Floor, 2nd St, TNHB Colony, Periyar Nagar West, Korattur, Chennai, Tamil Nadu 600080",
                phone: "+91 97100 79798",
                email: "info@rankraze.com",
                lat: 13.10907,
                lng: 80.1835,
            },
        ],
    },
    {
        country: "Canada",
        imgUrl: "/upload/canada-skt.webp",
        offices: [
            {
                label: "Office",
                city: "Pierrefonds-Roxboro",
                address: "5025 Sources Blvd suite 126, Pierrefonds-Roxboro, Quebec H8Y 3H8, Canada.",
                phone: "+44 7404 979307",
                email: "info@rankraze.ca",
                lat: 45.509916,
                lng: -73.821629,
            },
        ],
    },
    {
        country: "France",
        imgUrl: "/upload/france-skt.webp",
        offices: [
            {
                label: "Office",
                city: "Metz",
                address: "37 Rue du Comte Emmery, 57070 Metz, France.",
                phone: "+33651805164",
                email: "info@rankraze.fr",
                lat: 49.1055,
                lng: 6.195,
            },
        ],
    },
    {
        country: "UAE",
        imgUrl: "/upload/dubai-skt.webp",
        offices: [
            {
                label: "Office",
                city: "Dubai",
                address: "Artesia Tower, Damac Hills, Dubai UAE.",
                phone: "+971 0507747916",
                email: "info@rankraze.ae",
                lat: 25.0215,
                lng: 55.2343,
            },
        ],
    },
    {
        country: "UK",
        imgUrl: "/upload/uk-skt.webp",
        offices: [
            {
                label: "Office",
                city: "London",
                address: "Capital Office, 124 City Road, London, EC1V 2NX.",
                phone: "+44 7404 979307",
                email: "info@rankraze.co.uk",
                lat: 51.52727,
                lng: -0.089124,
            },
        ],
    },
    {
        country: "USA",
        imgUrl: "/upload/usa-skt.webp",
        offices: [
            {
                label: "Office",
                city: "Irving",
                address: "2801 W, Royal lane, Apt # 1905, Irving, TX - 75063.",
                phone: "+1 (919) 455-1241",
                email: "info@rankraze.us",
                lat: 32.9095676,
                lng: -96.9835333,
            },
        ],
    },
    {
        country: "Australia",
        imgUrl: "/upload/aus-skt.webp",
        offices: [
            {
                label: "Office",
                city: "Austral",
                address: "4 Greenhouse St, Austral NSW 2179, Australia.",
                phone: "+61 406 567 394",
                email: "info@rankraze.com.au",
                lat: -33.9282672,
                lng: 150.8082824,
            },
        ],
    },
];

const allOffices: FlatOffice[] = countryGroups.flatMap((group, countryIndex) =>
    group.offices.map((office, officeIndex) => ({
        ...office,
        country: group.country,
        countryIndex,
        officeIndex,
        imgUrl: group.imgUrl,
    })),
);

function createPinIcon(L: typeof import("leaflet"), isActive: boolean) {
    return L.divIcon({
        className: "rankraze-map-pin-wrapper",
        html: `<div class="rankraze-map-pin${isActive ? " rankraze-map-pin--active" : ""}"><div class="rankraze-map-pin__dot"></div></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
    });
}

function fitMapToOffices(
    L: typeof import("leaflet"),
    map: LeafletMap,
    offices: Pick<OfficeLocation, "lat" | "lng">[],
    options?: { maxZoom?: number; padding?: [number, number] },
) {
    if (offices.length === 0) return;

    if (offices.length === 1) {
        map.flyTo([offices[0].lat, offices[0].lng], options?.maxZoom ?? 6, { duration: 1 });
        return;
    }

    const bounds = L.latLngBounds(offices.map((office) => [office.lat, office.lng]));
    map.flyToBounds(bounds, {
        padding: options?.padding ?? [48, 48],
        maxZoom: options?.maxZoom ?? 12,
        duration: 1,
    });
}

type MapAndLocationMatchProps = {
    locationName?: string;
};

export default function MapAndLocationMatch(_props: MapAndLocationMatchProps = {}) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const countryScrollRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<LeafletMap | null>(null);
    const markersRef = useRef<LeafletMarker[]>([]);
    const leafletRef = useRef<typeof import("leaflet") | null>(null);

    const [viewSelection, setViewSelection] = useState<ViewSelection>("all");
    const [selectedOfficeIndex, setSelectedOfficeIndex] = useState(0);
    const [mapReady, setMapReady] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const isAllView = viewSelection === "all";
    const visibleOffices: FlatOffice[] = isAllView
        ? allOffices
        : countryGroups[viewSelection].offices.map((office, officeIndex) => ({
              ...office,
              country: countryGroups[viewSelection].country,
              countryIndex: viewSelection,
              officeIndex,
              imgUrl: countryGroups[viewSelection].imgUrl,
          }));

    const selectedOffice = visibleOffices[selectedOfficeIndex] ?? visibleOffices[0];
    const showOfficeList = isAllView || visibleOffices.length > 1;

    const updateCountryScrollState = useCallback(() => {
        const container = countryScrollRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 4);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }, []);

    const scrollCountryButtons = (direction: "left" | "right") => {
        const container = countryScrollRef.current;
        if (!container) return;

        const amount = Math.max(container.clientWidth * 0.75, 160);
        container.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    const selectAll = useCallback(() => {
        setViewSelection("all");
        setSelectedOfficeIndex(0);
    }, []);

    const selectCountry = useCallback((countryIndex: number) => {
        setViewSelection(countryIndex);
        setSelectedOfficeIndex(0);
    }, []);

    const selectOffice = useCallback((officeIndex: number) => {
        setSelectedOfficeIndex(officeIndex);

        const map = mapRef.current;
        const office = visibleOffices[officeIndex];
        if (map && office) {
            const zoom = isAllView ? 5 : visibleOffices.length > 1 ? 13 : 6;
            map.flyTo([office.lat, office.lng], zoom, { duration: 1 });
        }
    }, [visibleOffices, isAllView]);

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        let isMounted = true;

        const initMap = async () => {
            const L = await import("leaflet");
            if (!isMounted || !mapContainerRef.current) return;

            leafletRef.current = L;

            const map = L.map(mapContainerRef.current, {
                center: [20, 78],
                zoom: 5,
                minZoom: 2,
                maxZoom: 14,
                scrollWheelZoom: false,
                zoomControl: true,
            });

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            }).addTo(map);

            mapRef.current = map;
            setMapReady(true);

            requestAnimationFrame(() => {
                map.invalidateSize();
            });
        };

        initMap();

        return () => {
            isMounted = false;
            setMapReady(false);
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                markersRef.current = [];
                leafletRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const map = mapRef.current;
        const L = leafletRef.current;
        if (!mapReady || !map || !L) return;

        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        const newMarkers = visibleOffices.map((office, index) => {
            const marker = L.marker([office.lat, office.lng], {
                icon: createPinIcon(L, index === selectedOfficeIndex),
            }).addTo(map);

            marker.on("click", () => {
                setSelectedOfficeIndex(index);
                const zoom = isAllView ? 5 : visibleOffices.length > 1 ? 13 : 6;
                map.flyTo([office.lat, office.lng], zoom, { duration: 1 });
            });

            return marker;
        });

        markersRef.current = newMarkers;

        if (isAllView) {
            fitMapToOffices(L, map, visibleOffices, { maxZoom: 3, padding: [32, 32] });
        } else {
            fitMapToOffices(L, map, visibleOffices);
        }
    }, [viewSelection, mapReady]);

    useEffect(() => {
        const L = leafletRef.current;
        if (!L || markersRef.current.length === 0) return;

        markersRef.current.forEach((marker, index) => {
            marker.setIcon(createPinIcon(L, index === selectedOfficeIndex));
        });
    }, [selectedOfficeIndex]);

    useEffect(() => {
        updateCountryScrollState();

        const container = countryScrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", updateCountryScrollState);
        window.addEventListener("resize", updateCountryScrollState);

        return () => {
            container.removeEventListener("scroll", updateCountryScrollState);
            window.removeEventListener("resize", updateCountryScrollState);
        };
    }, [updateCountryScrollState, viewSelection]);

    return (
        <div className="w-full max-w-7xl mb-2.5 flex flex-col gap-3">
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 relative">
                <div className="w-full md:w-[30%] relative inset-shadow-xl shadow-white">
                    <div
                        className="absolute w-full h-full bg-[auto_100%] md:bg-cover bg-right md:bg-center bg-no-repeat -z-10 opacity-20 dark:opacity-35 grayscale-100 dark:invert dark:brightness-100"
                        style={{
                            backgroundImage: `url(${selectedOffice?.imgUrl ?? "/upload/india-skt.webp"})`,
                        }}
                    />
                    <div className="w-full h-full flex-col flex justify-evenly items-center p-5 border border-gray-100 rounded-sm shadow shadow-gray-300 dark:border-[#b8fff2] z-10">
                        {showOfficeList ? (
                            <div className="w-full flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-1">
                                <h3 className="font-bold dark:text-[#6bffe4] text-base md:text-lg">
                                    {isAllView ? "All Locations" : `${visibleOffices[0]?.country} Offices`}
                                </h3>
                                {isAllView && (
                                    <p className="text-xs text-gray-500 dark:text-[#b8fff2]/80 -mt-1">
                                        {allOffices.length} offices across {countryGroups.length} countries
                                    </p>
                                )}
                                {visibleOffices.map((office, index) => (
                                    <button
                                        key={`${office.country}-${office.label}-${office.address}`}
                                        type="button"
                                        onClick={() => selectOffice(index)}
                                        className={`cursor-pointer w-full text-left p-3 rounded-md border transition-colors ${
                                            index === selectedOfficeIndex
                                                ? "border-[var(--primary-green)] bg-[#3cba9914] dark:bg-[#3cba9920]"
                                                : "border-gray-200 dark:border-[#b8fff240] hover:border-[var(--primary-green)]"
                                        }`}
                                    >
                                        <p className="font-semibold text-sm dark:text-[#6bffe4]">
                                            {isAllView ? `${office.country} · ` : ""}
                                            {office.label} · {office.city}
                                        </p>
                                        <p className="font-light text-gray-900 dark:text-[#b8fff2] text-xs md:text-sm mt-1">
                                            {office.address}
                                        </p>
                                        <p className="font-light text-gray-700 dark:text-[#b8fff2] text-xs mt-2">
                                            {office.phone}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div className="w-full flex flex-col gap-2.5">
                                    <div className="w-full flex items-stretch justify-center gap-3">
                                        <div className="w-5 p-2">
                                            <i className="ri-map-pin-line text-2xl text-[var(--primary-green)]" />
                                        </div>
                                        <div className="w-full p-2 flex flex-col">
                                            <h3 className="inline-block font-bold dark:text-[#6bffe4]">
                                                {selectedOffice.country} Office
                                            </h3>
                                            <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">
                                                {selectedOffice.address}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-2.5">
                                    <div className="w-full flex items-stretch justify-center gap-3">
                                        <div className="w-5 p-2">
                                            <i className="ri-phone-line text-2xl text-[var(--primary-green)]" />
                                        </div>
                                        <div className="w-full p-2 flex flex-col">
                                            <h4 className="inline-block font-bold dark:text-[#6bffe4]">Phone</h4>
                                            <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">
                                                {selectedOffice.phone}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-2.5">
                                    <div className="w-full flex items-stretch justify-center gap-3">
                                        <div className="w-5 p-2">
                                            <i className="ri-mail-line text-2xl text-[var(--primary-green)]" />
                                        </div>
                                        <div className="w-full p-2 flex flex-col">
                                            <h4 className="inline-block font-bold dark:text-[#6bffe4]">Email</h4>
                                            <span className="inline-block font-light text-gray-900 dark:text-[#b8fff2] text-sm md:text-base">
                                                {selectedOffice.email}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className="w-full md:w-[70%] relative p-3.5 border border-gray-100 dark:border-[rgba(255,255,255,0.08)] rounded-sm shadow shadow-[#BDF7EC] dark:shadow-none bg-white dark:bg-[#0A1628] transition-colors duration-300 min-h-[320px] md:min-h-[420px]">
                    <div ref={mapContainerRef} className="leaflet-map-container" />
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 relative">
                <div className="w-full md:w-[30%] relative inset-shadow-xl shadow-white" />
                <div className="w-full md:w-[70%] relative inset-shadow-xl shadow-white">
                    <div className="flex items-stretch gap-2 min-h-11">
                        <button
                            type="button"
                            onClick={selectAll}
                            className={cn(
                                COUNTRY_BTN,
                                "inline-flex items-center justify-center gap-1.5 min-w-[4.25rem] shrink-0",
                                isAllView && COUNTRY_BTN_ACTIVE,
                            )}
                        >
                            <i className="ri-earth-line text-base" />
                            All
                        </button>

                        <div className="w-px self-stretch bg-gray-200 dark:bg-[rgba(184,255,242,0.15)] my-1 shrink-0" aria-hidden="true" />

                        <div className="relative flex items-center flex-1 min-w-0 gap-1">
                            {canScrollLeft && (
                                <span
                                    className="absolute top-0 bottom-0 w-8 left-8 pointer-events-none z-[2] bg-gradient-to-r from-white from-20% to-transparent dark:from-[#0a1628]"
                                    aria-hidden="true"
                                />
                            )}
                            {canScrollRight && (
                                <span
                                    className="absolute top-0 bottom-0 w-8 right-8 pointer-events-none z-[2] bg-gradient-to-l from-white from-20% to-transparent dark:from-[#0a1628]"
                                    aria-hidden="true"
                                />
                            )}

                            <button
                                type="button"
                                aria-label="Scroll countries left"
                                onClick={() => scrollCountryButtons("left")}
                                disabled={!canScrollLeft}
                                className={COUNTRY_NAV_ARROW}
                            >
                                <i className="ri-arrow-left-s-line text-lg" />
                            </button>

                            <div
                                ref={countryScrollRef}
                                className="flex-1 flex items-stretch gap-2 overflow-x-auto scroll-smooth py-0.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                            >
                                {countryGroups.map((group, index) => (
                                    <button
                                        key={group.country}
                                        type="button"
                                        onClick={() => selectCountry(index)}
                                        className={cn(
                                            COUNTRY_BTN,
                                            "shrink-0",
                                            viewSelection === index && COUNTRY_BTN_ACTIVE,
                                        )}
                                    >
                                        {group.country}
                                    </button>
                                ))}
                            </div>

                            <button
                                type="button"
                                aria-label="Scroll countries right"
                                onClick={() => scrollCountryButtons("right")}
                                disabled={!canScrollRight}
                                className={COUNTRY_NAV_ARROW}
                            >
                                <i className="ri-arrow-right-s-line text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
