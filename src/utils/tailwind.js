import clsx from "clsx";
import {twMerge} from "tailwind-merge";
/**
 * Utilidad `cn` - Función utilitaria
 *
 * 1. **`clsx`** te deja construir cadenas de clases de forma declarativa
 *    usando strings, arrays, objetos y valores booleanos.
 * 2. **`tailwind‑merge`** detecta y elimina clases de Tailwind que se
 *    pisan entre sí (p.ej. `p-2` + `p-4` ⇒ `p-4`).
 *
 * Al combinarlos con `cn`, obtienes una única función que compone clases
 * dinámicas y devuelve siempre la versión “limpia” y sin duplicados.
 *
 * Ejemplos de uso
 *
 * // 1. Clases condicionales por prop
 * <button className={cn(
 *   "px-4 py-2 rounded transition",
 *   primary && "bg-indigo-600 text-white",
 *   disabled && "opacity-50 cursor-not-allowed"
 * )}>
 *   Aceptar
 * </button>
 *
 * // 2. Mezcla de arrays y objetos
 * <div className={cn(
 *   ["p-4", "rounded"],
 *   { shadow: elevated, "ring-2": selected }
 * )}>
 * </div>
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}