import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export const profile = ({avatar_url}) => {
    <Container>
        <Header />
        <Content>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: avatar_url}} />
                        <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: avatar_url }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    </Container>
}


