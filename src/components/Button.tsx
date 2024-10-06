import { Button } from '@chakra-ui/react';

function CustomButton({
  label = 'button',
  onClick = () => alert('implement me'),
}: {
  label?: string;
  onClick?: () => void;
}) {
  return <Button onClick={onClick}>{label}</Button>;
}
export default CustomButton;
