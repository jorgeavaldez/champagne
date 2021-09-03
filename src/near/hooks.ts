import { useContext } from 'react';

import { NearContext } from './provider';

export function useNear() {
    return useContext(NearContext);
}