import { FC, useCallback, useState } from "react";
import { AdvancedMarker, AdvancedMarkerProps, APIProvider, InfoWindow, Map, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { BusinessItem } from "@/core/models/businesses/businessList";
import { ENV } from "@/core/config/env";
import { MarkerData } from "@/core/models/businesses/markerData";

type Props = {
    businesses: BusinessItem[];
}

const BusinessMapListing: FC<Props> = ({ businesses }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [infoWindowShown, setInfoWindowShown] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);

    const onMarkerClick = useCallback(
        (id: string | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
            setSelectedId(id);

            if (marker) {
                setSelectedMarker(marker);
            }

            if (id !== selectedId) {
                setInfoWindowShown(true);
            } else {
                setInfoWindowShown(isShown => !isShown);
            }
        },
        [selectedId]
    );

    const handleInfowindowCloseClick = useCallback(
        () => setInfoWindowShown(false),
        []
    );

    const onMapClick = useCallback(() => {
        setSelectedId(null);
        setSelectedMarker(null);
        setInfoWindowShown(false);
    }, []);






    // if (loading) return loading;

    const mapMarkers: MarkerData[] = businesses
        .filter((business: BusinessItem) =>
            business.latitude && business.longitude &&
            !isNaN(Number(business.latitude)) &&
            !isNaN(Number(business.longitude))
        )
        .map((business: BusinessItem, index: number) => ({
            id: business.companyId?.toString() ?? index.toString(), // ensure string id
            position: {
                lat: parseFloat(business.latitude),
                lng: parseFloat(business.longitude)
            },
            zIndex: index,
            type: 'pin',
            companyName: business.companyName,
            logoPath: business.logoPath,
            compDescription: business.compDescription
        }));

    const bounds: google.maps.LatLngBoundsLiteral & { padding: number } = {
        north: Math.max(...mapMarkers.map((m) => m.position.lat)),
        south: Math.min(...mapMarkers.map((m) => m.position.lat)),
        east: Math.max(...mapMarkers.map((m) => m.position.lng)),
        west: Math.min(...mapMarkers.map((m) => m.position.lng)),
        padding: 50
    };




    return (
        <div className="mt-8">
            <APIProvider apiKey={ENV.GOOGLE_MAPS_API_KEY as string}>
                <Map
                    mapId={crypto.randomUUID()}
                    defaultZoom={12}
                    gestureHandling={'greedy'}
                    defaultBounds={bounds}
                    clickableIcons={false}
                    disableDefaultUI
                    onClick={onMapClick}
                    className="w-full h-[500px] shadow-lg overflow-hidden">
                    {mapMarkers.map(({ id, zIndex, position }) => {
                        return (
                            <AdvancedMarkerWithRef
                                onMarkerClick={(
                                    marker: google.maps.marker.AdvancedMarkerElement
                                ) => onMarkerClick(id, marker)}
                                key={id}
                                zIndex={zIndex}
                                className="custom-marker"
                                position={position}>
                            </AdvancedMarkerWithRef>
                        );
                    })}
                    {infoWindowShown && selectedMarker && (
                        <InfoWindow
                            anchor={selectedMarker}
                            pixelOffset={[0, -2]}
                            onCloseClick={handleInfowindowCloseClick}>
                            <h2 className="uppercase text-primary font-semibold mb-1">{mapMarkers.find(x => x.id === selectedId)?.companyName}</h2>
                        </InfoWindow>
                    )}
                </Map>
            </APIProvider>


        </div>
    )
}




export const AdvancedMarkerWithRef = (
    props: AdvancedMarkerProps & {
        onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
    }
) => {
    const { children, onMarkerClick, ...advancedMarkerProps } = props;
    const [markerRef, marker] = useAdvancedMarkerRef();

    return (
        <AdvancedMarker
            onClick={() => {
                if (marker) {
                    onMarkerClick(marker);
                }
            }}
            ref={markerRef}
            {...advancedMarkerProps}>
            {children}
        </AdvancedMarker>
    );
};

export default BusinessMapListing;