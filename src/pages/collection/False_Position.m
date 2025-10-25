clc; clear;

func_str = input('Enter the function f(x) in terms of x, e.g., x.^3 - x - 2: ', 's');
f = str2func(['@(x) ' func_str]);  

a = input('Enter the left endpoint a: ');
b = input('Enter the right endpoint b: ');
tol = input('Enter the tolerance, e.g., 1e-5: ');

if f(a) * f(b) > 0
    error('Invalid interval: f(a) and f(b) must have opposite signs.');
end

iter = 0;
c_old = a;

fprintf('\nIter\t     a\t\t     b\t\t     c\t\t   f(c)\n');
fprintf('-------------------------------------------------------------\n');

while true
    iter = iter + 1;

    c = b - f(b) * (b - a) / (f(b) - f(a));

    fprintf('%d\t%f\t%f\t%f\t%f\n', iter, a, b, c, f(c));

    if abs(f(c)) < tol
        fprintf('\n✅ Root found at x = %.6f after %d iterations.\n', c, iter);
        break;
    end

    if f(a) * f(c) < 0
        b = c;
    else
        a = c;
    end

    if abs(c - c_old) < eps
        fprintf('\n⚠️ Stopped: change between successive c values is extremely small.\n');
        break;
    end

    c_old = c;
end
