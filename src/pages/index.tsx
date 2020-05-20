import { useRecoilState } from 'recoil';
import { colorModeState } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = {};
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = ({ className }) => {
  const [mode, setColorMode] = useRecoilState(colorModeState);

  return (
    <div className={className}>
      {mode}
      <button
        type='button'
        aria-label='button'
        onClick={() => setColorMode((mode) => (mode === `Light` ? `Dark` : `Light`))}
      />
    </div>
  );
};

const StyledComponent = styled(Component)``;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;
