import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function CreateCategory() {
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
    const [categoryName, setCategoryName] = useState("");
    const [loading, setLoading] = useState(false);

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

        const droppedFile = e.dataTransfer.files[0];
        setImage(droppedFile);

        const previewUrl = URL.createObjectURL(droppedFile);
        setImagePreview(previewUrl);
    }

    const handleUpload = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        setImage(file);

        const previewUrl = URL.createObjectURL(file);

        setImagePreview(previewUrl);
    }

    const handleRemoveImage = () => {
        setImagePreview(null);
        setImage(null);
    }

const handleCreateNewCategory = async (e) => {
    e.preventDefault();

    if (loading) {
        // console.log("Loaind");
        return;
    }

    // 1. Basic client-side validation
    if (!categoryName || !image) {
        // console.log("missing image or name");
        return toast.error("Please provide both a name and an image");
    }

    setLoading(true);

    try {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", categoryName);

        const response = await axios.post(
            "http://localhost:8000/api/v1/admin/create-new-category",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        // Axios only reaches this line if status is 2xx
        toast.success("Successfully Created");
        // console.log(response.data);

    } catch (error) {
        // 2. Handle the 400 error here
        // console.log(error);
        // console.error("Error Response:", error.response?.data);
        
        const errorMessage = error.response?.data?.message || "Error creating category";
        toast.error(errorMessage);
    } finally {
        // 3. This runs whether the request succeeded OR failed
        setLoading(false);
    }
};

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10">
            <Toaster position="top-center" reverseOrder={false} />
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
                            value={categoryName}
                            onChange={e => setCategoryName(e.target.value)}
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
                            type="submit"
                            onClick={handleCreateNewCategory}
                            disabled={loading} // Prevents clicks while loading
                            className={`rounded-md px-6 py-2 text-sm text-white transition-all 
                                ${loading
                                    ? 'bg-neutral-500 cursor-not-allowed opacity-70'
                                    : 'bg-neutral-800 hover:bg-neutral-700'
                                }`}
                        >
                            {loading ? 'Creating...' : 'Create Category'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreateCategory;
