
/* eslint-disable new-cap */
import PDFOperator from 'core/pdf-operators/PDFOperator';

import { addStringToBuffer } from 'utils';
import { validate, isNumber } from 'utils/validate';

/**
Set the miter limit in the graphics state
*/
class M extends PDFOperator {
  miterLimit: number;

  constructor(miterLimit: number) {
    super();
    validate(
      miterLimit,
      isNumber,
      'j operator arg "miterLimit" must be a number.',
    );
    this.miterLimit = miterLimit;
  }

  static of = (miterLimit: number) => new M(miterLimit);

  toString = (): string => `${this.miterLimit} M\n`;

  bytesSize = (): number => this.toString().length;

  copyBytesInto = (buffer: Uint8Array): Uint8Array =>
    addStringToBuffer(this.toString(), buffer);
}

export default M;
