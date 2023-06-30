import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {}; // выносим чтобы объект не пересоздавался

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
