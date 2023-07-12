import { decode } from "html-entities";

const decodeContent = (markup) => {
    return decode(markup);
    };

const getFirstImageUrl = (decodedContent) => {
const images = decodedContent.match(/<img src="(.*?)"/m);

return images ? images[1] : null;
};


const parseImageSrc = (markup) => {
const decodedContent = decodeContent(markup);
const imgSrc = getFirstImageUrl(decodedContent);

return imgSrc
}

export default parseImageSrc;