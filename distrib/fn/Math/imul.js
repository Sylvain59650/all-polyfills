if (!Math.imul) Math.imul = function(opA, opB) {
  opB |= 0;
  var result = (opA & 0x001fffff) * opB;
  if (opA & 0xffc00000 /*!== 0*/ ) result += (opA & 0xffc00000) * opB | 0;
  return result | 0;
};