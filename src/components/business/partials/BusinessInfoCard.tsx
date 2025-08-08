export interface BusinessInfoCardProps {
    businessId: number;
}

export default function BusinessInfoCard({ businessId }: BusinessInfoCardProps) {
    return (
        <div className="border border-gray-300 p-4 mb-4 bg-white">
            <h3 className="text-lg font-semibold">{businessId}</h3>
        </div>
    );
}
