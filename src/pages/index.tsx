import { useRecoilState } from 'recoil';
import { ColorMode, colorModeState } from 'src/store';

import styled from '@emotion/styled';

type ContainerProps = Record<string, unknown>;
type Props = Record<string, unknown> & ContainerProps;

const Component: React.FCX<Props> = ({ className }) => {
  const [mode, setColorMode] = useRecoilState<ColorMode>(colorModeState);

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
