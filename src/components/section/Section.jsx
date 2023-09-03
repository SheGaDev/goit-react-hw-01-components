import PropTypes from 'prop-types';
// const SectionStyle = styled.section`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 40px;
//     color: #010101;
// `;
// const DivStyle = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;
const Section = ({ title, children }) => {
  return (
    <section className='mx-auto flex max-w-max flex-col items-center gap-2'>
      {title && (
        <h2 className='pt-3'>
          <b>{title}</b>
        </h2>
      )}
      <div className='flex flex-col items-center gap-3 bg-card-color p-3'>{children}</div>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;