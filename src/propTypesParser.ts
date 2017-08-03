import { 
    parse as newParse, 
    ComponentDoc,
    Props,
    PropItem,
    PropItemType
} from './parser';

/**
 * This method exists for backward compatibility only.
 * User *parse* method from *parser* file.
 */
export function parse(fileName: string) {
    return newParse(fileName);
}