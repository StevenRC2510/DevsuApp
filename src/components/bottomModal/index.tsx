import React from 'react';
import {
  Animated, Modal, View, Pressable,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';

import { BottomModalProps } from '@components/bottomModal/types';

import styles from '@components/bottomModal/styles';

function BottomModal({ children, open, onClose }: BottomModalProps) {
  return (
    <Modal
      animated
      transparent
      animationType="slide"
      visible={open}
      onRequestClose={onClose}
    >
      <View style={styles.overlay} testID="bottom-modal">
        <Animated.View style={[styles.container]}>
          <Pressable
            style={styles.closeBtn}
            onPress={onClose}
            testID="close-button"
          >
            <FontAwesomeIcon icon={faClose} />
          </Pressable>
          <View style={styles.divider} />
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}
export default BottomModal;
