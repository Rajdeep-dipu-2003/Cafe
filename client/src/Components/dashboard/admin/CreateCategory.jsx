import { useEffect, useState } from "react";

function CreateCategory() {
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault();

        window.addEventListener("dragover", preventDefault);
        window.addEventListener("drop", preventDefault);

        return () => {
            window.removeEventListener("dragover", preventDefault);
            window.removeEventListener("drop", preventDefault);
        }
    }, [])


    const handleDrop = (e) => {
        e.preventDefault();

        const droppendFile = e.dataTransfer.files[0];
        const previewUrl = URL.createObjectURL(droppendFile);

        setImagePreview(previewUrl);
    }

    const handleUpload = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    }

    const handleRemoveImage = () => {
        setImagePreview(null);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">

                {/* Header */}
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Create Category
                </h1>

                {/* Form */}
                <form className="space-y-6">

                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Burgers"
                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Max 50 characters
                        </p>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category Image
                        </label>

                        <div
                            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-neutral-800 transition"
                        >
                            {imagePreview ? (
                                <div className="flex flex-col items-center gap-3">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="h-32 object-contain rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="text-sm text-red-600 hover:underline"
                                    >
                                        Remove image
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onDrop={handleDrop}
                                    onDragOver={(e) => e.preventDefault()}
                                >
                                    <p className="text-gray-600 text-sm">
                                        Drag & drop an image here
                                    </p>
                                    <p className="text-gray-400 text-xs my-2">or</p>

                                    <label className="inline-block cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-sm text-white hover:bg-neutral-700">
                                        Choose from computer
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleUpload}
                                        />
                                    </label>

                                    <p className="text-xs text-gray-400 mt-3">
                                        Supported formats: JPG, PNG, WEBP
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            className="rounded-md border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-neutral-800 px-6 py-2 text-sm text-white hover:bg-neutral-700"
                        >
                            Create Category
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreateCategory;
