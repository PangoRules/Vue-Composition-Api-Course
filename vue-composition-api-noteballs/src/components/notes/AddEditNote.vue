<template>
	<div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
		<label class="label has-text-white" v-if="label">{{ label }}</label>
		<div class="field">
			<div class="control">
				<textarea
					:value="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
					class="textarea"
					:placeholder="placeholder" 
					maxlength="100"
					v-autofocus
					ref="textareaRef"/>
			</div>
		</div>

		<div class="field is-grouped is-grouped-right">
			<div class="control">
				<slot name="buttons"></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
/**
 * Imports
 */
	import { ref } from 'vue';
	import { vAutofocus } from '@/directives/vAutofocus';

/**
 * Props
 */
	const props = defineProps({
		modelValue: {
			type: String,
			required: true
		},
		bgColor: {
			type: String,
			default: 'success'
		},
		placeholder: {
			type: String,
			default: 'Type something...'
		},
		label: {
			type: String
		}
	});

/**
 * Emits
 */
	const emit = defineEmits(['update:modelValue']);

/**
 * Focus textarea
 */
	const textareaRef = ref(null);

	const focusTextarea = () =>{
		textareaRef.value.focus();
	}

	defineExpose({
		focusTextarea
	});
</script>