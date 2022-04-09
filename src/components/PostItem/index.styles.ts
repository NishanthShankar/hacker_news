export default {
  modalCtn: (expanded: boolean) => ({
    zIndex: 1,
    borderRadius: 4,
    transform: expanded ? 'scale(1.1, 1.1)' : null,
    boxShadow: expanded ? '0px 0px 8px 2px #0004' : null,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white'
  }),
  container: {
    padding: 12,
    margin: 12,
    display: 'flex',
    backgroundColor: 'pink',
    position: 'relative'
  },
  elementCtn: {
    margin: 12
  },
  watchLaterBtn: {
    cursor: 'pointer',
    height: 32,
    backgroundColor: '#ddd',
    color: '#888',
    fontSize: 14,
    margin: 6
  },
  subText: {
    fontSize: 12,
    lineHeight: '18px'
  },
  titleText: {
    margin: '12px 0 6px 0',
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 'bold'
  },
  infoContainer: {
    marginLeft: 6,
    marginBottom: 6
  },
  overlayTextCtn: {
    position: 'absolute',
    padding: 3,
    right: 8,
    bottom: 8,
    backgroundColor: 'black'
  },
  overlayText: {
    color: 'white',
    fontSize: 11
  },
  imageCtn: {
    position: 'relative'
  }
}
