import { useNavigation } from '@react-navigation/native';
import { Icon } from '@roninoss/icons';
import { Link } from 'expo-router';
import { Platform, View, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '~/components/nativewindui/Button';
import { Text } from '~/components/nativewindui/Text';
import { useColorScheme } from '~/lib/useColorScheme';

const ROOT_STYLE: ViewStyle = { flex: 1 };

export default function WelcomeConsentScreen() {
  const { colors } = useColorScheme();
  return (
    <SafeAreaView style={ROOT_STYLE}>
      <View className="mx-auto max-w-sm flex-1 justify-between gap-4 px-8 py-4">
        <View className="ios:pt-8 pt-12">
          <Text
            variant="largeTitle"
            className="ios:text-left ios:font-black text-center font-bold text-black">
            Welcome to your
          </Text>
          <Text
            variant="largeTitle"
            className="text-center font-bold text-blue-600">
            CALM
          </Text>
        </View>
        <View className="gap-8">
          {FEATURES.map((feature) => (
            <View key={feature.title} className="flex-row gap-4">
              <View className="pt-px">
                <Icon
                  name={feature.icon}
                  size={38}
                  color={colors.primary}
                  ios={{ renderingMode: 'hierarchical' }}
                />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-black">{feature.title}</Text>
                <Text variant="footnote" className="text-black">
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View className="gap-4">
          <View className="items-center">
            <Icon
              name="account-multiple"
              size={24}
              color={colors.primary}
              ios={{ renderingMode: 'hierarchical' }}
            />
            <Text variant="caption2" className="pt-1 text-center text-black">
              By pressing continue, you agree to our{' '}
              <Link href="/">
                <Text variant="caption2" className="text-primary">
                  Terms of Service
                </Text>
              </Link>{' '}
              and that you have read our{' '}
              <Link href="/">
                <Text variant="caption2" className="text-primary">
                  Privacy Policy
                </Text>
              </Link>
            </Text>
          </View>
          <Link href="/signin" replace asChild>
            <Button size={Platform.select({ ios: 'lg', default: 'md' })}>
              <Text className="text-black">Continue</Text>
            </Button>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const FEATURES = [
  {
    title: 'Companion AI',
    description:
      'Engage in meaningful conversations with an AI that understands, listens, and supports you.',
    icon: 'account-circle-outline',
  },
  {
    title: 'Emotional Check-in',
    description:
      'Track your emotions and receive personalized insights to help you feel better every day.',
    icon: 'message-processing',
  },
  {
    title: 'Guided Mindfulness',
    description:
      'Experience AI-powered meditations and affirmations designed to bring you peace and comfort.',
    icon: 'chart-timeline-variant',
  },
] as const;
