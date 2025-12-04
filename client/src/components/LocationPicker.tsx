import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// Fix Leaflet icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface LocationPickerProps {
    onLocationSelect: (lat: number, lng: number) => void;
}

function LocationMarker({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
    const [position, setPosition] = useState<L.LatLng | null>(null);

    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            onLocationSelect(e.latlng.lat, e.latlng.lng);
            map.flyTo(e.latlng, map.getZoom());
        },
        locationfound(e) {
            setPosition(e.latlng);
            onLocationSelect(e.latlng.lat, e.latlng.lng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    useEffect(() => {
        map.locate();
    }, [map]);

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
}

export default function LocationPicker({ onLocationSelect }: LocationPickerProps) {
    const [mapReady, setMapReady] = useState(false);

    // Default center (can be anywhere, will update on locate)
    const defaultCenter: [number, number] = [28.6139, 77.2090]; // New Delhi

    return (
        <div className="h-[300px] w-full rounded-lg overflow-hidden border border-white/10 relative z-0">
            <MapContainer
                center={defaultCenter}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                whenReady={() => setMapReady(true)}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker onLocationSelect={onLocationSelect} />
            </MapContainer>

            {!mapReady && (
                <div className="absolute inset-0 bg-[#111] flex items-center justify-center text-white/50 text-sm">
                    Loading Map...
                </div>
            )}

            <div className="absolute bottom-4 right-4 z-[1000]">
                <Button
                    size="sm"
                    className="bg-white text-black hover:bg-white/90 shadow-lg"
                    onClick={(e) => {
                        e.stopPropagation();
                        // Logic to re-trigger locate would go here if we exposed the map instance
                        // For now, the initial load triggers locate
                    }}
                >
                    <MapPin className="w-4 h-4 mr-2" /> Locate Me
                </Button>
            </div>
        </div>
    );
}
