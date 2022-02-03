import styled from 'styled-components';
import happy from '../../images/happy.svg';
import good from '../../images/good.svg';
import hmm from '../../images/hmm.svg';
import sad from '../../images/sad.svg';
import sceptic from '../../images/sceptic.svg';

function RadioButton({ value, children, onRadioChange }) {
  return (
    <section>
      <label>{children}</label>
      <FullCardContent>
        <IconStyling src={sad} />
        <IconStyling src={hmm} />
        <IconStyling src={sceptic} />
        <IconStyling src={good} />
        <IconStyling src={happy} />
        <div class="form-check form-check-inline">
          <input
            type="radio"
            value="Schlecht"
            checked={value === 'Schlecht'}
            onChange={onRadioChange}
            name="stimmung"
          ></input>{' '}
          <label class="form-check-label" for="inlineRadio1"></label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            value="Nicht so gut"
            checked={value === 'Nicht so gut'}
            onChange={onRadioChange}
            name="stimmung"
          ></input>{' '}
          <label class="form-check-label" for="inlineRadio2"></label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            value="So mittel"
            checked={value === 'So mittel'}
            onChange={onRadioChange}
            name="stimmung"
          ></input>{' '}
          <label class="form-check-label" for="inlineRadio3"></label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            value="Gut"
            checked={value === 'Gut'}
            onChange={onRadioChange}
            name="stimmung"
          ></input>{' '}
          <label class="form-check-label" for="inlineRadio4"></label>
        </div>
        <div class="form-check form-check-inline">
          <input
            type="radio"
            value="Super"
            checked={value === 'Super'}
            onChange={onRadioChange}
            name="stimmung"
          ></input>{' '}
          <label class="form-check-label" for="inlineRadio5"></label>
        </div>
      </FullCardContent>
    </section>
  );
}

export default RadioButton;

const FullCardContent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin: 1rem;
  padding: 0 0 4px 0;
`;

const IconStyling = styled.img`
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;
