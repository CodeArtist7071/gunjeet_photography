
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowLeftCircleIcon } from 'lucide-react'
import { GOOGLE_DRIVE_URL } from '../constants/apis'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

interface DriveFile {
    id: string
    name: string
    mimeType: string
}

const EventGallery = () => {
  const { eventType } = useParams<{ eventType: string }>()
  const [files, setFiles] = useState<DriveFile[]>([])
  const data = useSelector((state: RootState) => state.drive.files.data ?? [])
  const mapData = data.filter((e: any) => (e.parentFolderName == eventType))
  const imageIds = mapData.flatMap((folder: any) => folder.images.map((img: any) => ({ id: img.id, title:img.name})));
  console.log("checks....",imageIds)
  const [loading, setLoading] = useState(true)
    const title = eventType ? eventType.charAt(0).toUpperCase() + eventType.slice(1) : 'Gallery'

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchImages()
    }, [eventType]) // Re-fetch if eventType changes, though currently folder ID is static

    const fetchImages = async () => {
        try {
            // Updated query to filter for images and non-trashed files directly in the API call
            const response = await fetch(
              GOOGLE_DRIVE_URL
            )

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json()
            console.log(data)
            if (data.files) {
                setFiles(data.files)
            }
        } catch (error) {
            console.error("Error fetching images:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white pt-5 px-4 md:px-8">
            <div className="container mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeftCircleIcon className="mr-2" size={34} />
                    Back to Home
                </Link>

                <h1 className="text-3xl md:text-6xl text-center font-bold mb-12 capitalize">{title}</h1>

                {loading ? (
                    <div className="text-center py-20 text-gray-500">
                        <p>Loading gallery...</p>
                    </div>
                ) : imageIds.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {imageIds.map((file,index) => (
                            <div key={index} className="aspect-4/5 rounded-lg overflow-hidden bg-gray-900 group border border-gray-800">
                                <img
                                    // Using the lh3.googleusercontent.com URL format which works well for public drive images
                                    src={`https://lh3.googleusercontent.com/d/${file.id}=w1000`}
                                    alt={file.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        // Fallback if the direct link fails (e.g. if permissions restrict it)
                                        (e.target as HTMLImageElement).src = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;
                                    }}
                                />
                                {/* <div className="p-4 bg-black/50 absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform">
                                    <p className=" truncate text-white text-2xl">{(file.name).toUpperCase().replace(/\.(jpg|jpeg|png)$/i, "")}</p>
                                </div> */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-500">
                        <p>No photos found in the gallery. Please ensure the Drive folder is public.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventGallery
