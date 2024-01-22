export const Selector = ({ index, posicion }) => {
    const classSelector = `${index === posicion ? 'triangulo' : ''}`;

    return (
      <div className={classSelector}></div>
    );
  };