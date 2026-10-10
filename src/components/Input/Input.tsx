import React, { forwardRef, useState, type ComponentProps } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const COLORS = {
  primary: "#4ecb71",
  error: "#d32f2f",
  border: "#d1d5db",
  text: "#1f2937",
  placeholder: "#9ca3af",
  background: "#ffffff",
};

type IoniconName = ComponentProps<typeof Ionicons>["name"];

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: IoniconName;
  rightIcon?: IoniconName;
  onRightIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      onRightIconPress,
      containerStyle,
      disabled = false,
      editable,
      secureTextEntry = false,
      placeholderTextColor,
      accessibilityLabel,
      onFocus,
      onBlur,
      style,
      ...textInputProps
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isDisabled = disabled || editable === false;
    const displayedRightIcon = secureTextEntry
      ? isPasswordVisible
        ? "eye-off-outline"
        : "eye-outline"
      : rightIcon;

    return (
      <View style={containerStyle}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <View
          style={[
            styles.inputContainer,
            isFocused && !error && styles.focusedContainer,
            error && styles.errorContainer,
            isDisabled && styles.disabledContainer,
          ]}
        >
          {leftIcon ? (
            <Ionicons
              name={leftIcon}
              size={20}
              color={error ? COLORS.error : COLORS.placeholder}
              style={styles.leftIcon}
            />
          ) : null}
          <TextInput
            ref={ref}
            {...textInputProps}
            editable={!isDisabled}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            placeholderTextColor={placeholderTextColor ?? COLORS.placeholder}
            accessibilityLabel={accessibilityLabel ?? label}
            accessibilityState={{ disabled: isDisabled }}
            onFocus={(event) => {
              setIsFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setIsFocused(false);
              onBlur?.(event);
            }}
            style={[styles.textInput, style]}
          />
          {displayedRightIcon && secureTextEntry ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={
                isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              accessibilityState={{ disabled: isDisabled }}
              disabled={isDisabled}
              onPress={() => setIsPasswordVisible((visible) => !visible)}
              style={styles.rightIconButton}
            >
              <Ionicons
                name={displayedRightIcon}
                size={20}
                color={COLORS.placeholder}
              />
            </Pressable>
          ) : displayedRightIcon ? (
            onRightIconPress ? (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Acción del campo"
                accessibilityState={{ disabled: isDisabled }}
                disabled={isDisabled}
                onPress={onRightIconPress}
                style={styles.rightIconButton}
              >
                <Ionicons
                  name={displayedRightIcon}
                  size={20}
                  color={COLORS.placeholder}
                />
              </Pressable>
            ) : (
              <Ionicons
                name={displayedRightIcon}
                size={20}
                color={COLORS.placeholder}
                style={styles.rightIcon}
              />
            )
          ) : null}
        </View>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : helperText ? (
          <Text style={styles.helperText}>{helperText}</Text>
        ) : null}
      </View>
    );
  },
);

Input.displayName = "Input";

const styles = StyleSheet.create({
  label: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  inputContainer: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    backgroundColor: COLORS.background,
    paddingHorizontal: 12,
  },
  focusedContainer: {
    borderColor: COLORS.primary,
  },
  errorContainer: {
    borderColor: COLORS.error,
  },
  disabledContainer: {
    opacity: 0.5,
  },
  leftIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    minHeight: 46,
    color: COLORS.text,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  rightIcon: {
    marginLeft: 8,
  },
  rightIconButton: {
    minWidth: 32,
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 5,
  },
  helperText: {
    color: COLORS.placeholder,
    fontSize: 12,
    marginTop: 5,
  },
});

export default Input;
