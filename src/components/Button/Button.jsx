import { Buttons, SelectedButton } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <>
      {selected ? (
        <SelectedButton type={type} {...otherProps}>
          {children}
        </SelectedButton>
      ) : (
        <Buttons type={type} {...otherProps}>
          {children}
        </Buttons>
      )}
    </>
  );
};
