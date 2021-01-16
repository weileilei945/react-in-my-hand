/**
 * @file report
 * @author weileilei01
 * @param {function} onPerfEntry
 */

const reportWebVitals = (onPerfEntry) => { // eslint-disable-line
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals; // eslint-disable-line
