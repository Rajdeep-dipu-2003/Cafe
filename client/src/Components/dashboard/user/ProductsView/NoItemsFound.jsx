import { SearchX } from "lucide-react";

function NoItemsFound({ query }) {
    return (
        <div className="w-full h-[60vh] flex flex-col items-center justify-center text-center px-4">
            {/* Icon */}
            <div className="bg-red-100 p-6 rounded-full mb-6">
                <SearchX className="w-10 h-10 text-red-500" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                No items found
            </h2>

            {/* Message */}
            <p className="text-gray-600 max-w-md mb-6">
                {query
                    ? `We couldn't find any products matching "${query}".`
                    : "We couldn't find any products for your request."}
            </p>

            {/* Suggestions */}
            <div className="text-sm text-gray-500 space-y-1">
                <p>• Check for spelling mistakes</p>
                <p>• Try different keywords</p>
                <p>• Browse categories instead</p>
            </div>
        </div>
    );
}

export default NoItemsFound;
