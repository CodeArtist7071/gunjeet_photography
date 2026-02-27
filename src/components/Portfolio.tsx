import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadData } from "../store/slice/driveSlice";
import { AppDispatch, RootState } from "../store/store";

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  kind?: string;
}

interface PortfolioProps {
  folders: Record<string, DriveFile> | DriveFile[];
}

export const Portfolio = () => {
  const folders = useSelector(
    (state: RootState) => state.drive.files.data ?? [],
  );

  const portfolioRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  // console.log("home", folders);
  // setFolderData(names)
  // console.log("what is this..?", names);

  // 🔥 Ensure folders is always an array
  // const folderArray: DriveFile[] = Array.isArray(folders)
  //   ? folders
  //   : Object.values(folders || {});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    const items = portfolioRef.current?.querySelectorAll(".portfolio-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const handleItemClick = (id: string) => {
    navigate(`/gallery/${id}`);
  };

  return (
    <section id="portfolio" className="min-h-screen py-10 md:py-10 relative">
      <div className="container max-w-350 mx-auto px-8">
        <div className="text-center mb-12 md:mb-12">
          <h2 className="text-4xl md:text-5xl md:mt-10 lg:text-6xl mb-8 text-white">
            Event Photography
          </h2>
          <p className="text-base md:text-lg text-white">
            Capturing moments across different types of events
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={portfolioRef}
        >
          {folders.length === 0 ? (
            <p className="text-white text-center col-span-full">
              No folders found
            </p>
          ) : (
            folders.map((item: any) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item.parentFolderName)}
                className="portfolio-item relative overflow-hidden rounded-lg cursor-pointer bg-charcoal-dark shadow-medium transition-transform duration-300 hover:-translate-y-2 hover:shadow-strong group"
              >
                <img
                  src={`https://drive.google.com/thumbnail?id=${item.images[0].id}&sz=w1000`}
                  alt={item.name}
                  className="w-full md:w-[95%] mx-auto rounded-lg h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-medium text-white truncate">
                    {item.parentFolderName}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
