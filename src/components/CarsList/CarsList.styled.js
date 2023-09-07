import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Item = styled.li`
  position: relative;
  max-width: calc((100% - (29px * 3)) / 4);
`;

{
  /* <CarsList>
  {error && <h1>{error} </h1>}
  {loading && <Loader />}
  {cars &&
    cars.map(car => {
      return (
        <CarItem key={car.id}>
          <Image
            // src={car.img ? car.img : { NoImageCar }}
            src={car.img || NoImageCar}
            alt={car.make}
            width="274px"
            height="268px"
          ></Image>
          <WrapTitles>
            <TextTitles>
              {car.make} <TextModel>{car.model},</TextModel> {car.year}
            </TextTitles>
            <TextTitles>{car.rentalPrice}</TextTitles>
          </WrapTitles>

          <WrapInfo>
            <TopWrapInfo>
              <Text>{car.address.split(',')[1]}</Text>
              <Text>{car.address.split(',')[2]}</Text>
              <Text>{car.rentalCompany}</Text>
            </TopWrapInfo>
            <BottomWrapInfo>
              <Text> {car.type} </Text>
              <Text>{car.id}</Text>
              <Text>{car.accessories[0]}</Text>
            </BottomWrapInfo>
          </WrapInfo>

          <BtnLearnMore type="button" onClick={() => setSelectedCar(car)}>
            Learn more
          </BtnLearnMore>
          <HeartImg onClick={handleHeart} /> */
}
{
  /* <HeartImg
                  onClick={() => toggleFavorite(car)}
                  style={{
                    fill: isFavorite ? '#3470ff' : 'currentColor',
                    stroke: isFavorite ? '#3470ff' : 'currentColor',
                  }}
                /> */
}
{
  /* </CarItem>
      );
    })}
</CarsList> */
}
