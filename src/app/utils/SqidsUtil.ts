import Sqids from 'sqids';

const sqidsOptions = {
    minLength: 16,
    alphabet: 'piedumYoSJHDfIKxrFbzEjAcvaBZyWPwQLTRlsCkgXtOGMNUqhnV',
    blocklist: new Set<string>(['flyman']),
};
const sqids = new Sqids(sqidsOptions);

/**
 * Utility class for encoding and decoding SQIDs.
 */
export class SqidsUtility {
    /**
     * Encodes a number into a string using sqids encoding.
     * @param ids - The numbers to encode.
     * @returns The encoded string.
     */
    public static encode(ids: number[]): string {
        return sqids.encode(ids);
    }

    /**
     * Decodes the given SQID and returns the decoded number.
     * @param id The SQID to decode.
     * @returns The Array of decoded numbers or undefined if the SQID is invalid.
     * @throws Error if the SQID is invalid.
     */
    public static decode(id: string): number[] | undefined {
        if (!this.ensureCanonical(id)) throw new Error('Invalid SQID');

        return sqids.decode(id);
    }

    /**
     * Ensures that the given ID is in canonical form.
     * See: https://github.com/sqids/sqids-javascript?tab=readme-ov-file#-examples for more information.
     * @param incomingId - The ID to be checked.
     * @returns A boolean value indicating whether the ID is in canonical form.
     */
    public static ensureCanonical(incomingId: string): boolean {
        const decodedId = sqids.decode(incomingId);

        return sqids.encode(decodedId) === incomingId;
    }
}
