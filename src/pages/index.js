export default function Home() {
  return (
    <Container>
      <SearchSection>
        <h2>IP Address Tracker</h2>

        <div>
          <input type="text" placeholder="Search for any IP address or domain"></input>
          <button><Arrow /></button>
        </div>
      </SearchSection>
    </Container>
  )
}
