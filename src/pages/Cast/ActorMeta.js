import PropTypes from 'prop-types';
import { Meta, Paragraph, Label } from './Cast.styled';

const ActorMeta = ({ name = 'No info', character = 'No info' }) => {
  return (
    <Meta>
      <Paragraph>
        <Label>Actor name: </Label>
        {name}
      </Paragraph>
      <Paragraph>
        <Label>Charachter: </Label>
        {character}
      </Paragraph>
    </Meta>
  );
};

ActorMeta.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
};

export default ActorMeta;
