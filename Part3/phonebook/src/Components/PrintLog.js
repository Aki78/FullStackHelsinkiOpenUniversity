import '../App.css';

export const PrintLog = ({injectMessage}) => {
  return <h3 key={injectMessage} className={injectMessage.length > 3? 'logMessage': '' }> {injectMessage }</h3>
}
