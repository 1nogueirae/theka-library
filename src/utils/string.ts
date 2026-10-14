export function namesQuantity(name: string): number {
    return name.trim().split(' ').filter(Boolean).length;
}