package main

import "strings"

// A command's options and positional arguments. Options may come before or after positionals, as --name value or
// --name=value; "--" ends them. Every command takes --json, --employee and --help.
type parsed struct {
	strings     map[string]string
	bools       map[string]bool
	positionals []string
}

func (p *parsed) has(name string) bool {
	_, ok := p.strings[name]
	return ok
}

func (p *parsed) positional(i int) string {
	if i < len(p.positionals) {
		return p.positionals[i]
	}
	return ""
}

func parseArgs(args []string, stringOptions, boolOptions []string) (*parsed, error) {
	isString := map[string]bool{"employee": true}
	for _, name := range stringOptions {
		isString[name] = true
	}
	isBool := map[string]bool{"json": true, "help": true}
	for _, name := range boolOptions {
		isBool[name] = true
	}

	p := &parsed{strings: map[string]string{}, bools: map[string]bool{}}
	for i := 0; i < len(args); i++ {
		arg := args[i]
		switch {
		case arg == "--":
			p.positionals = append(p.positionals, args[i+1:]...)
			return p, nil
		case arg == "-h":
			p.bools["help"] = true
		case strings.HasPrefix(arg, "--"):
			name, value, hasValue := strings.Cut(arg[2:], "=")
			switch {
			case isBool[name]:
				if hasValue {
					return nil, fail("Option --%s doesn't take a value. Run `crewmark help` for usage.", name)
				}
				p.bools[name] = true
			case isString[name]:
				if !hasValue {
					if i+1 >= len(args) {
						return nil, fail("Option --%s needs a value. Run `crewmark help` for usage.", name)
					}
					i++
					value = args[i]
				}
				p.strings[name] = value
			default:
				return nil, fail("Unknown option --%s. Run `crewmark help` for usage.", name)
			}
		// Text that starts with a dash, like a Markdown list ("- one\n- two"), isn't an option.
		case strings.HasPrefix(arg, "-") && len(arg) > 1 && !strings.ContainsAny(arg, " \t\n"):
			return nil, fail("Unknown option %s. Run `crewmark help` for usage.", arg)
		default:
			p.positionals = append(p.positionals, arg)
		}
	}
	return p, nil
}
