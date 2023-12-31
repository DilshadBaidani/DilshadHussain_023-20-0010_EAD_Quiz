import styled from '@emotion/styled'

export const Card = styled.div`
  // change these cards in such a way that they are not arranged in a row but in three columns
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 5px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  img {
    object-fit: cover;
  }
`

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 95%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`
