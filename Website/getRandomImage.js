/**
 * This function returns a random image from a directory.
 * There are a few requirements for the directory:
 * - The directory must only include images.
 * - All images in the directory must have the same file format.
 * - The name of all images must be a number starting from 1.
 * - No number can be skipped. No numbers below 1.
 *
 * @param   directory   The name of the directory that contains the images (should not contain a '/').
 * @param   fileFormat  The format of the files (example: '.png').
 * @param   imageAmount The amount of images in the directory.
 *
 * @typedef {{directory: String, fileFormat: String, imageAmount: int}}
 *
 * @Return  The location of an image.
 */
function returnRandomImage(directory, fileFormat, imageAmount){
    const index = Math.ceil(Math.random() * imageAmount);
    return directory + '/' + index + fileFormat;
}