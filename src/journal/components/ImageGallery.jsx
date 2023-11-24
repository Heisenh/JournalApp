import { ImageList, ImageListItem } from '@mui/material';


function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const ImageGallery = ({ images = [] }) => {
    return (
        <ImageList
            sx={{ width: '100%', height: 500 }}
            variant="quilted"
            cols={ 4 }
            rowHeight={ 130 }
        >
            {
                images.map((image) => (
                    <ImageListItem key={ image } cols={ image.cols || 1 } rows={ image.rows || 1 }>
                        <img
                            { ...srcset( image, 121, image.rows, image.cols ) }
                            alt='Imagen de la nota'
                            loading="lazy"
                        />
                    </ImageListItem>
                ))
            }
        </ImageList>
    );
}

