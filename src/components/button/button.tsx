import React, {
    ForwardRefRenderFunction,
    MouseEventHandler,
    ElementType,
    ReactNode,
    MutableRefObject,
} from 'react';
import { ComponentSize } from '../../config/sizes';
import { MainColors } from '../../config/theme';
import { Icon, IconProps } from '../icon';
import StyledButton from './button.styled';

export type ButtonVarient = 'contained' | 'text' | 'outlined';

interface BaseButtonProps {
    varient?: ButtonVarient;
    color?: MainColors;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftIconProps?: IconProps;
    rightIconProps?: IconProps;
    size?: ComponentSize;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
}

export interface HTMLButtonProps extends BaseButtonProps {
    onClick?: MouseEventHandler<HTMLElement>;
}

export interface LinkButtonProps extends BaseButtonProps {
    href?: string;
}

// For react router buttons
export interface CustomButtonProps extends BaseButtonProps {
    as?: ElementType;
    to?: string;
}

export type ButtonProps = HTMLButtonProps &
    LinkButtonProps &
    CustomButtonProps &
    BaseButtonProps;

const Button: ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const {
        color = 'primary',
        varient = 'contained',
        leftIcon,
        rightIcon,
        leftIconProps,
        rightIconProps,
        size = 'md',
        children,
        disabled = false,
        loading = false,
        loadingText = 'Loading',
        onClick,
        href,
        as,
        to,
    } = props;

    const styles = {
        buttonColor: color,
        size,
        disabled: disabled || loading,
        varient,
        iconOnly: children == null,
    };

    //  ToDo: Will I need loader style?

    const buttonBody = loading ? (
        <>
            {loadingText}
            {/* ToDo add spinner here */}
        </>
    ) : (
        <>
            {leftIcon && <Icon {...leftIconProps}>{leftIcon}</Icon>}
            {children}
            {rightIcon && <Icon {...rightIconProps}>{rightIcon}</Icon>}
        </>
    );

    if (as && !disabled) {
        return (
            <StyledButton as={as} to={to} ref={ref} {...styles}>
                {buttonBody}
            </StyledButton>
        );
    }

    if (href && !disabled) {
        return (
            <StyledButton
                as="a"
                href={href}
                ref={ref as MutableRefObject<HTMLAnchorElement>}
                {...styles}
            >
                {buttonBody}
            </StyledButton>
        );
    }

    return (
        <StyledButton
            as="button"
            type="button"
            onClick={onClick}
            ref={ref as MutableRefObject<HTMLButtonElement>}
            {...styles}
        >
            {buttonBody}
        </StyledButton>
    );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
