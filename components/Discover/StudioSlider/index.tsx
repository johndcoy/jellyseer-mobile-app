import ThemedText from '@/components/Common/ThemedText';
import CompanyCard from '@/components/CompanyCard';
import Slider from '@/components/Slider';
import getJellyseerrMessages from '@/utils/getJellyseerrMessages';
import { useIntl } from 'react-intl';
import { View } from 'react-native';

const messages = getJellyseerrMessages('components.Discover.StudioSlider');

interface Studio {
  name: string;
  image: string;
  url: string;
}

const studios: Studio[] = [
  {
    name: 'Disney',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
    url: '(tabs)/discover_movies/studio/2',
  },
  {
    name: '20th Century Studios',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/h0rjX5vjW5r8yEnUBStFarjcLT4.png',
    url: '(tabs)/discover_movies/studio/127928',
  },
  {
    name: 'Sony Pictures',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/GagSvqWlyPdkFHMfQ3pNq6ix9P.png',
    url: '(tabs)/discover_movies/studio/34',
  },
  {
    name: 'Warner Bros. Pictures',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
    url: '(tabs)/discover_movies/studio/174',
  },
  {
    name: 'Universal',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
    url: '(tabs)/discover_movies/studio/33',
  },
  {
    name: 'Paramount',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/fycMZt242LVjagMByZOLUGbCvv3.png',
    url: '(tabs)/discover_movies/studio/4',
  },
  {
    name: 'Pixar',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png',
    url: '(tabs)/discover_movies/studio/3',
  },
  {
    name: 'Dreamworks',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/kP7t6RwGz2AvvTkvnI1uteEwHet.png',
    url: '(tabs)/discover_movies/studio/521',
  },
  {
    name: 'Marvel Studios',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
    url: '(tabs)/discover_movies/studio/420',
  },
  {
    name: 'DC',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
    url: '(tabs)/discover_movies/studio/9993',
  },
  {
    name: 'A24',
    image:
      'https://image.tmdb.org/t/p/w780_filter(duotone,ffffff,bababa)/1ZXsGaFPgrgS6ZZGS37AqD5uU12.png',
    url: '(tabs)/discover_movies/studio/41077',
  },
];

const StudioSlider = () => {
  const intl = useIntl();

  return (
    <>
      <View className="slider-header px-4">
        <View className="flex min-w-0 flex-row items-center gap-2">
          <ThemedText className="truncate text-2xl font-bold">
            {intl.formatMessage(messages.studios)}
          </ThemedText>
          {/* <ArrowRightCircle color="#ffffff" /> */}
        </View>
      </View>
      <Slider
        sliderKey="studios"
        isLoading={false}
        isEmpty={false}
        items={studios.map((studio, index) => (
          <CompanyCard
            key={`studio-${index}`}
            name={studio.name}
            image={studio.image}
            url={studio.url}
          />
        ))}
        emptyMessage=""
      />
    </>
  );
};

export default StudioSlider;
