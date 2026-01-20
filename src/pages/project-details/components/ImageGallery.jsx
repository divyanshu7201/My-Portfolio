import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images?.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images?.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="mb-8 md:mb-10 lg:mb-12">
      <h2 className="mb-4 text-2xl font-semibold text-foreground md:mb-6 md:text-3xl lg:text-4xl">
        Project Gallery
      </h2>
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-elevation-2">
        <div
          className="relative aspect-video w-full cursor-pointer overflow-hidden bg-muted"
          onClick={() => openLightbox(selectedImage)}
        >
          <Image
            src={images?.[selectedImage]?.url}
            alt={images?.[selectedImage]?.alt}
            className="h-full w-full object-cover transition-smooth hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-smooth hover:bg-black/10">
            <div className="rounded-full bg-white/90 p-3 opacity-0 transition-smooth hover:opacity-100 md:p-4">
              <Icon name="Maximize2" size={24} className="text-foreground" strokeWidth={2} />
            </div>
          </div>

          <button
            onClick={(e) => {
              e?.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-elevation-2 transition-smooth hover:bg-white md:left-4 md:h-12 md:w-12"
            aria-label="Previous image"
          >
            <Icon name="ChevronLeft" size={24} strokeWidth={2} />
          </button>

          <button
            onClick={(e) => {
              e?.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-elevation-2 transition-smooth hover:bg-white md:right-4 md:h-12 md:w-12"
            aria-label="Next image"
          >
            <Icon name="ChevronRight" size={24} strokeWidth={2} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1.5 md:px-4 md:py-2">
            <p className="caption text-white">
              {selectedImage + 1} / {images?.length}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-4 md:grid-cols-4 md:gap-3 md:p-6 lg:grid-cols-6 lg:gap-4">
          {images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-smooth ${
                selectedImage === index
                  ? 'border-primary' :'border-transparent hover:border-border'
              }`}
            >
              <Image
                src={image?.url}
                alt={image?.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-smooth hover:bg-white/20 md:h-12 md:w-12"
            aria-label="Close lightbox"
          >
            <Icon name="X" size={24} strokeWidth={2} />
          </button>

          <div className="relative h-full w-full p-4 md:p-8 lg:p-12">
            <Image
              src={images?.[selectedImage]?.url}
              alt={images?.[selectedImage]?.alt}
              className="h-full w-full object-contain"
            />

            <button
              onClick={(e) => {
                e?.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-smooth hover:bg-white/20 md:left-8 md:h-14 md:w-14"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={28} strokeWidth={2} />
            </button>

            <button
              onClick={(e) => {
                e?.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-smooth hover:bg-white/20 md:right-8 md:h-14 md:w-14"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={28} strokeWidth={2} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 md:px-6 md:py-3">
              <p className="text-sm text-white md:text-base">
                {selectedImage + 1} / {images?.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;