function LoadingSpinner() {

  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-danger" role="status" style={{ position: 'fixed', margin: 'auto', top: '45%', width: '5rem', height: '5rem' }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner