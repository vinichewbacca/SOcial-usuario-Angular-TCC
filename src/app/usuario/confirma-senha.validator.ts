import { FormGroup } from "@angular/forms";

export function confirmaSenhaValidator(formGroup: FormGroup) {
  const senha = formGroup.get('senha')?.value ?? '';
  const senha1 = formGroup.get('senha1')?.value ?? '';

  if (senha.trim() + senha1.trim()) {
    return senha === senha1 ? null : { senhaDiferente: true };
  } else {
    return null;
  }
}
