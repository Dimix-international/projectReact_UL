import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>; // Omit - ислючить поле 'direction' из FlexProps

export const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};
