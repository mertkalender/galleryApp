import {Dimensions} from 'react-native';

export const DEFAULT_BACKGROUND_COLOR = '#000000';
export const HEADER_BACKGROUND_COLOR = 'rgba(30, 30, 30, 0.5)';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const COLUMN_COUNT = 3;

export const IMAGE_ITEM_WIDTH = windowWidth / COLUMN_COUNT - 10;
export const IMAGE_ITEM_HEIGHT = windowWidth / COLUMN_COUNT - 10;

export const IMAGE_WIDTH = windowWidth;
export const IMAGE_HEIGHT = windowHeight;

export const KEYWORD_TO_GET = 'memes';
