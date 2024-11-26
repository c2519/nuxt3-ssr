import mitt from 'mitt';

const emitter = mitt();

export const useOn = emitter.on;
export const useEmit = emitter.emit;
export const useOff = emitter.off;
