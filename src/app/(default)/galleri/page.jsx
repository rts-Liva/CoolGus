import { join } from 'path';
import { readdirSync } from 'fs';
import GallerySlider from '@/components/gallery-slider';
import '@/scss/pages/gallery.scss';

export const metadata = {
    title: 'Galleri'
}

function GalleryPage() {
    const sliderDir = join(process.cwd(), 'public/images/slider');
    const sliderImageFiles = readdirSync(sliderDir)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .sort();

    const masonryDir = join(process.cwd(), 'public/images/gallery');
    const masonryImageFiles = readdirSync(masonryDir)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .sort();

    return (
        <>
            <GallerySlider sliderImageFiles={sliderImageFiles} />
            <div className="gallery-container">
                {masonryImageFiles.map((image) => (
                    <div key={image} className='gallery-container__image-container'>
                        <img src={`images/gallery/${image}`} alt="galleri billede" className="gallery-container__image" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default GalleryPage;