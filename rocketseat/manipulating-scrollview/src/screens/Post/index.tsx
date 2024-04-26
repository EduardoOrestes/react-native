import { ScrollView, Text, View, useWindowDimensions } from "react-native";

import { ProgressBar } from "../../components/ProgressBar";

import { styles } from "./styles";

import { useState, useRef } from "react";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  }
}

export function Post() {
  const [percentage, setPercentage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);

  const dimensions = useWindowDimensions();

  function scrollPercentage({ contentSize, contentOffset, layoutMeasurement }: ScrollProps) {
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);

    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    console.log(`${value}%`);

    setPercentage(value < visibleContent ? 0 : value);
  }

  function handleScrollMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView
         ref={scrollRef}
         scrollEventThrottle={16} // usado para IOS
         showsVerticalScrollIndicator={false}
         contentContainerStyle={styles.content}
         onScroll={(e) => scrollPercentage(e.nativeEvent)}
      >
        <Text style={styles.title}>
          Lorem ipsum
        </Text>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates ex tempore! Adipisci quaerat vitae molestiae sapiente nesciunt nemo animi! Quisquam, inventore amet et architecto consequuntur dicta officia dolorem veniam!
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates ex tempore! Adipisci quaerat vitae molestiae sapiente nesciunt nemo animi! Quisquam, inventore amet et architecto consequuntur dicta officia dolorem veniam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, asperiores alias eos porro distinctio ullam quaerat labore cumque nesciunt molestias ipsa quis deleniti minima molestiae iure facere facilis eum. Eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates ex tempore! Adipisci quaerat vitae molestiae sapiente nesciunt nemo animi! Quisquam, inventore amet et architecto consequuntur dicta officia dolorem veniam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, asperiores alias eos porro distinctio ullam quaerat labore cumque nesciunt molestias ipsa quis deleniti minima molestiae iure facere facilis eum. Eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates ex tempore! Adipisci quaerat vitae molestiae sapiente nesciunt nemo animi! Quisquam, inventore amet et architecto consequuntur dicta officia dolorem veniam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, asperiores alias eos porro distinctio ullam quaerat labore cumque nesciunt molestias ipsa quis deleniti minima molestiae iure facere facilis eum. Eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates ex tempore! Adipisci quaerat vitae molestiae sapiente nesciunt nemo animi! Quisquam, inventore amet et architecto consequuntur dicta officia dolorem veniam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, asperiores alias eos porro distinctio ullam quaerat labore cumque nesciunt molestias ipsa quis deleniti minima molestiae iure facere facilis eum. Eaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, autem temporibus voluptatum beatae quidem laudantium soluta quas tenetur, quibusdam, provident distinctio earum sed officiis adipisci nisi itaque ratione animi? Totam.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ea, ipsam cumque minus, illum incidunt voluptatibus quos amet veritatis tempora eaque iusto voluptates dolorum assumenda cum facilis. Amet, blanditiis quasi.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates ex tempore! Adipisci quaerat vitae molestiae sapiente nesciunt nemo animi! Quisquam, inventore amet et architecto consequuntur dicta officia dolorem veniam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, asperiores alias eos porro distinctio ullam quaerat labore cumque nesciunt molestias ipsa quis deleniti minima molestiae iure facere facilis eum. Eaque.
          </Text>
        </View>
      </ScrollView>

      <ProgressBar
        value={percentage}
        onMoveTop={handleScrollMoveTop}
      />
    </View>
  )
}