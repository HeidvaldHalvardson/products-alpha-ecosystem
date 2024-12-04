import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
